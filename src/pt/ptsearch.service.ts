import { Injectable } from '@nestjs/common';

import { apiMap } from 'src/shared/config/apiEndpoints.config';
import { parseFieldsFromObject } from 'src/utils/parser';
import { GetCountryDetailsArgs } from './dto/args/getCountryDetails.args';
import { GetTypeAheadArgs } from './dto/args/getTypeAhead.args';
import { Enquiry } from './dto/input/createEnquiry.input';
import { Country } from './models/country';
import { EnquiryIcrm } from './models/enquiryIcrm';
import { EnquiryPetra } from './models/enquiryPetra';
import { Project } from './models/projectList';
import { TypeAhead } from './models/typeAhead';

const axios = require('axios');

@Injectable()
export class PtSearchService {
    getFilterArray({ builderId, cityLabel, localityId }) {
        let filterArr = [];
        if (cityLabel !== undefined) {
            filterArr.push({
                equal: {
                    cityLabel: [`${cityLabel}`],
                },
            });
        }
        if (localityId !== undefined) {
            filterArr.push({
                equal: {
                    localityId: [`${localityId}`],
                },
            });
        }
        if (builderId !== undefined) {
            filterArr.push({
                equal: {
                    builderId: [`${builderId}`],
                },
            });
        }
        return filterArr;
    }

    async getAllListings(listingArgs, fieldMap): Promise<[Project]> {
        const { localityId, cityLabel, builderId, pagingStart, pagingRows, sortParams = [] } = listingArgs;
        const { domain, url } = apiMap.backend.ptPetra.projectListingApi;
        let pagingObj = {};
        let sortObj = {};
        if (pagingStart !== undefined && pagingRows !== undefined) {
            pagingObj = { paging: { start: pagingStart, rows: pagingRows } };
        }
        if (sortParams.length) {
            sortObj = { sort: sortParams };
        }
        const fieldObj = {
            fields: parseFieldsFromObject({ object: fieldMap }),
        };
        let selector = JSON.stringify({
            filters: { and: this.getFilterArray({ cityLabel, localityId, builderId }) },
            ...pagingObj,
            ...sortObj,
            ...fieldObj,
        });
        const finalUrl = `http://${domain}${url}=${selector}`;
        const response = await axios.get(finalUrl);

        return response.data.data.items;
    }

    async getProjectDetails(projectDetailArgs, fieldMap): Promise<Project> {
      const { projectId } = projectDetailArgs;
      const selector = JSON.stringify({
        fields: parseFieldsFromObject({ object: fieldMap }),
      });
      const { domain, url } = apiMap.backend.ptPetra.projectDetailsApi;
      const finalUrl = `http://${domain}${url}${projectId}?selector=${selector}`;
      const { data: { data: projectDetails = {} } = {} } = await axios.get(finalUrl);
      return projectDetails;
    }

    async getTypeAheadResults(getTypeAheadArgs: GetTypeAheadArgs): Promise<[TypeAhead]> {
      const { domain, url } = apiMap.backend.ptColumbus.typeaheadApi;
      let finalUrl = `https://${domain}${url}?`;
      Object.keys(getTypeAheadArgs).forEach((key, index) => {
        finalUrl += `${key}=${getTypeAheadArgs[key]}`;
        if (index < Object.keys(getTypeAheadArgs).length - 1) {
          finalUrl += '&'
        }
      });
      const { data: { data: results = [] } = {} } = await axios.get(finalUrl);
      return results;
    }

    async getCountryDetails(getCountryArgs: GetCountryDetailsArgs): Promise<Country> {
      const { domain, url } = apiMap.backend.ptPetra.countryDetailsApi;
      const finalUrl = `https://${domain}${url}${getCountryArgs.countryId}`;
      const { data: { data: response = {} } = {} } = await axios.get(finalUrl);
      return response;
    }

    async createEnquiryIcrm(enquiry: Enquiry): Promise<EnquiryIcrm> {
      const { domain, url } = apiMap.backend.ptIcrm.createEnquiryApi;
      const finalUrl = `https://${domain}${url}?debug=true&lastEnquiryRequired=true`;
      const { data: { data: response = {} } = {} } = await axios.post(finalUrl, enquiry);
      return response;
    }

    async createEnquiryPetra(enquiry: Enquiry): Promise<EnquiryPetra> {
      const { domain, url } = apiMap.backend.ptPetra.createEnquiryApi;
      const finalUrl = `https://${domain}${url}?debug=true&lastEnquiryRequired=true`;
      const { data: { data: response = {} } = {} } = await axios.post(finalUrl, enquiry);
      return response;
    }
}
