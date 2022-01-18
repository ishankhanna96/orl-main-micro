import { Field, ObjectType } from '@nestjs/graphql';

// Unknown object type
@ObjectType()
class SellerIdToListingId {
    @Field({ nullable: true })
    default: string;
}

@ObjectType()
class EnquiryAttributes {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    enquiryId: number;

    @Field({ nullable: true })
    localityId: number;

    @Field({ nullable: true })
    isInterestedInSimilarProperties: boolean;

    @Field({ nullable: true })
    isLoanRequired: boolean;
}

@ObjectType()
class LastEnquiry {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    ip: string;

    @Field({ nullable: true })
    source: string;

    @Field({ nullable: true })
    refUrl: string;

    @Field({ nullable: true })
    adGrp: string;

    @Field({ nullable: true })
    keywords: string;

    @Field({ nullable: true })
    campaign: string;

    @Field({ nullable: true })
    user: string;

    @Field({ nullable: true })
    landingPage: string;

    @Field({ nullable: true })
    userMedium: string;

    @Field({ nullable: true })
    gaSource: string;

    @Field({ nullable: true })
    gaMedium: string;

    @Field({ nullable: true })
    gaNetwork: string;

    @Field({ nullable: true })
    gaKeywords: string;

    @Field({ nullable: true })
    gaCampaign: string;

    @Field({ nullable: true })
    gaUserId: string;

    @Field({ nullable: true })
    processingStatus: string;

    @Field({ nullable: true })
    isInterestedInSimilarProperties: boolean;

    @Field({ nullable: true })
    trackingFlag: boolean;

    @Field({ nullable: true })
    isOtpVerified: boolean;

    @Field({ nullable: true })
    otpValidationSuccess: boolean;

    @Field({ nullable: true })
    optSent: boolean;

    @Field({ nullable: true })
    sendOtp: boolean;

    @Field({ nullable: true })
    sendEnquiryDropNotification: boolean;

    @Field({ nullable: true })
    propertyIdentified: boolean;

    @Field({ nullable: true })
    housingEnquiry: boolean;

    @Field({ nullable: true })
    domainId: boolean;

    @Field(() => [EnquiryAttributes], { nullable: true })
    enquiryAttributes: EnquiryAttributes[];

    @Field({ nullable: true })
    isSponsored: boolean;

    @Field({ nullable: true })
    isVerified: boolean;

    @Field({ nullable: true })
    isCommercial: boolean;

    @Field(() => SellerIdToListingId, { nullable: true })
    sellerIdToListingId: SellerIdToListingId;
}

@ObjectType()
export class EnquiryPetra {
    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    ppc: boolean;

    @Field({ nullable: true })
    tracking: boolean;

    @Field(() => [Number], { nullable: true })
    enquiryIds: number[];

    @Field({ nullable: true })
    userId: number;

    @Field({ nullable: true })
    isOtpVerified: boolean;

    @Field({ nullable: true })
    otpSent: boolean;

    @Field({ nullable: true })
    lastEnquiry: LastEnquiry;

    @Field({ nullable: true })
    isSpamNumber: boolean;
}
