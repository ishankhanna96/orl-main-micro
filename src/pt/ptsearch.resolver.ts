import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { fieldsMap } from 'graphql-fields-list';

import { GetCountryDetailsArgs } from './dto/args/getCountryDetails.args';
import { GetListingArgs } from './dto/args/getListing.args';
import { GetProjectDetailsArgs } from './dto/args/getProjectDetails.args';
import { GetTypeAheadArgs } from './dto/args/getTypeAhead.args';
import { Enquiry } from './dto/input/createEnquiry.input';
import { Country } from './models/country';
import { EnquiryIcrm } from './models/enquiryIcrm';
import { EnquiryPetra } from './models/enquiryPetra';
import { Project } from './models/projectList';
import { TypeAhead } from './models/typeAhead';
import { PtSearchService } from './ptsearch.service';

@Resolver()
export class PtSearchResolver {
    constructor(private readonly ptSearchService: PtSearchService) {}

    /**
     *  Get Project Listings by id args(cityLabel,localityId)
     */
    @Query(() => [Project], { name: 'projectListing', nullable: true })
    getAllListings(@Args() getListingArgs: GetListingArgs, @Info() info): any {
        const fieldMap = fieldsMap(info);
        return this.ptSearchService.getAllListings(getListingArgs, fieldMap);
    }

    /**
     *  Get Project Listings by id args(cityLabel,localityId)
     */
    @Query(() => Project, { name: 'projectDetails', nullable: true })
    getProjectDetails(@Args() getProjectDetailsArgs: GetProjectDetailsArgs, @Info() info): any {
        const fieldMap = fieldsMap(info);
        return this.ptSearchService.getProjectDetails(getProjectDetailsArgs, fieldMap);
    }

    /**
     *  Get Typeahead API Results
     */
    @Query(() => [TypeAhead], { name: 'typeahead', nullable: true })
    getTypeAheadResults(@Args() getTypeAheadArgs: GetTypeAheadArgs) {
        return this.ptSearchService.getTypeAheadResults(getTypeAheadArgs);
    }

    /**
     *  Get Country Details
     */
    @Query(() => Country, { name: 'country', nullable: true })
    getCountryDetails(@Args() getCountryArgs: GetCountryDetailsArgs) {
      return this.ptSearchService.getCountryDetails(getCountryArgs);
    }

    /**
     *  Create an enquiry in ICRM
     */
    @Mutation(() => EnquiryIcrm, { name: 'createEnquiryIcrm', nullable: true })
    createEnquiryIcrm(@Args() enquiry: Enquiry): any {
        return this.ptSearchService.createEnquiryIcrm(enquiry);
    }

    /**
     *  Create an enquiry in Petra
     */
     @Mutation(() => EnquiryPetra, { name: 'createEnquiryPetra', nullable: true })
     createEnquiryPetra(@Args() enquiry: Enquiry): any {
         return this.ptSearchService.createEnquiryPetra(enquiry);
     }
}
