import { ArgsType, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class EnquiryType {
    @Field({ nullable: true })
    id: number;
}

// TODO: Find what fields are required, i.e nullable or not

@ArgsType()
export class Enquiry {
    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    phone: string;

    @Field({ nullable: true })
    countryId: number;

    @Field({ nullable: true })
    cityId: number;

    @Field({ nullable: true })
    cityName: string;

    @Field({ nullable: true })
    localityIds: string;

    @Field({ nullable: true })
    pageName: string;

    @Field({ nullable: true })
    pageUrl: string;

    @Field({ nullable: true })
    bedrooms: string;

    @Field({ nullable: true })
    propertyType: string;

    @Field({ nullable: true })
    typeId: string;

    @Field({ nullable: true })
    formName: string;

    @Field(() => [String], { nullable: true })
    multipleProjectIds: string[];

    @Field({ nullable: true })
    listingId: string;

    @Field({ nullable: true })
    propertyId: string;

    @Field({ nullable: true })
    loanAmount: string;

    @Field({ nullable: true })
    query: string;

    @Field({ nullable: true })
    sendOtp: boolean;

    @Field({ nullable: true })
    homeLoanTypeFlag: boolean;

    @Field({ nullable: true })
    enquiryType: EnquiryType;

    @Field({ nullable: true })
    tempEnquiryId: number;

    @Field({ nullable: true })
    applicationType: string;

    @Field({ nullable: true })
    isOtpVerified: boolean;

    @Field({ nullable: true })
    jsonDump: string;
}
