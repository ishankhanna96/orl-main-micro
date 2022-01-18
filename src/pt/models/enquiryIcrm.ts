import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class EnquiryType {
    @Field({ nullable: true })
    id: number;
}

@ObjectType()
export class EnquiryIcrm {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    phone: string;

    @Field({ nullable: true })
    cookies: string;

    @Field({ nullable: true })
    request: string;

    @Field({ nullable: true })
    queryParameter: string;

    @Field({ nullable: true })
    query: string;

    @Field({ nullable: true })
    ip: number;

    @Field({ nullable: true })
    cityId: number;

    @Field({ nullable: true })
    cityName: string;

    @Field({ nullable: true })
    createdDate: number;

    @Field({ nullable: true })
    pageName: string;

    @Field({ nullable: true })
    registeredUser: string;

    @Field({ nullable: true })
    processingStatus: string;

    @Field({ nullable: true })
    applicationType: string;

    @Field({ nullable: true })
    userId: number;

    @Field({ nullable: true })
    domainId: number;

    @Field({ nullable: true })
    enquiryTypeId: number;

    @Field({ nullable: true })
    enquiryType: EnquiryType;

    @Field({ nullable: true })
    isSponsored: boolean;

    @Field({ nullable: true })
    processed: boolean;

    @Field({ nullable: true })
    marketingLead: string;

    @Field({ nullable: true })
    isOtpVerified: boolean;

    @Field({ nullable: true })
    optSent: boolean;

    @Field({ nullable: true })
    sendOtp: boolean;

    @Field({ nullable: true })
    otpValidationSuccess: boolean;

    @Field({ nullable: true })
    countryId: number;
}
