import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Empty unknown object types in petra response defined with a
 * default field for passing nest validation
 */
@ObjectType()
class LocalityTaxonomyUrlObject {
    @Field({ nullable: true })
    apartments: string;

    @Field({ nullable: true })
    propertysale: string;

    @Field({ nullable: true })
    plots: string;

    @Field({ nullable: true })
    villas: string;

    @Field({ nullable: true })
    readyToMoveFlatsUrl: string;

    @Field({ nullable: true })
    luxuryProjectsUrl: string;

    @Field({ nullable: true })
    affordableFlatsUrl: string;

    @Field({ nullable: true })
    underConstructionPropertyUrl: string;

    @Field({ nullable: true })
    upcomingFlatsForSaleUrl: string;

    @Field({ nullable: true })
    upcomingPropertyUrl: string;

    @Field({ nullable: true })
    newAppartmentsForSaleUrl: string;

    @Field({ nullable: true })
    resaleApartmentUrl: string;

    @Field({ nullable: true })
    newLaunch: string;
}
@ObjectType()
class Country {
    @Field({ nullable: true })
    default: string;
}
@ObjectType()
class state {
    @Field({ nullable: true })
    stateId: number;

    @Field({ nullable: true })
    countryId: number;

    // TBD
    @Field(() => Country, { nullable: true })
    country: Country;
}

@ObjectType()
class City {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    authorized: boolean;

    @Field({ nullable: true })
    label: string;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    northEastLatitude: number;

    @Field({ nullable: true })
    northEastLongitude: number;

    @Field({ nullable: true })
    southWestLatitude: number;

    @Field({ nullable: true })
    southWestLongitude: number;

    @Field({ nullable: true })
    centerLatitude: number;

    @Field({ nullable: true })
    centerLongitude: number;

    @Field({ nullable: true })
    displayPriority: number;

    @Field({ nullable: true })
    displayOrder: number;

    @Field({ nullable: true })
    url: string;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    isServing: boolean;

    @Field({ nullable: true })
    isServingResale: boolean;

    @Field({ nullable: true })
    overviewUrl: string;

    @Field({ nullable: true })
    localityMaxSafetyScore: number;

    @Field({ nullable: true })
    localityMinSafetyScore: number;

    @Field({ nullable: true })
    localityMaxLivabilityScore: number;

    @Field({ nullable: true })
    localityMinLivabilityScore: number;

    @Field({ nullable: true })
    isTierOneCity: boolean;

    @Field({ nullable: true })
    showPolygon: boolean;

    @Field(() => [Number], { nullable: true })
    geo: number[];

    @Field({ nullable: true })
    state: state;

    @Field({ nullable: true })
    cityLocalityCount: number;

    @Field({ nullable: true })
    cityTaxonomyUrls: LocalityTaxonomyUrlObject;

    @Field({ nullable: true })
    cityHeroshotImageUrl: string;
}

@ObjectType()
class MainImage {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    imageTypeId: number;

    @Field({ nullable: true })
    objectId: number;

    @Field({ nullable: true })
    statusId: number;

    @Field({ nullable: true })
    sizeInBytes: number;

    @Field({ nullable: true })
    width: number;

    @Field({ nullable: true })
    height: number;

    @Field({ nullable: true })
    activeStatus: number;

    @Field({ nullable: true })
    active: boolean;

    @Field({ nullable: true })
    title: string;

    @Field({ nullable: true })
    altText: string;

    @Field({ nullable: true })
    absolutePath: string;
}

@ObjectType()
class Builder {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    displayName: string;

    @Field({ nullable: true })
    url: string;

    @Field({ nullable: true })
    isBuilderListed: boolean;

    @Field({ nullable: true })
    averageDelay: number;
}

@ObjectType()
class Suburb {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    cityId: number;

    @Field({ nullable: true })
    label: string;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    city: City;

    @Field({ nullable: true })
    priority: number;

    @Field({ nullable: true })
    overviewUrl: string;

    @Field({ nullable: true })
    isDescriptionVerified: boolean;

    @Field({ nullable: true })
    url: string;

    @Field({ nullable: true })
    description: boolean;

    @Field({ nullable: true })
    suburbTaxonomyUrls: LocalityTaxonomyUrlObject;
}

@ObjectType()
class MasterImageStatus {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    status: string;
}

@ObjectType()
class ObjectTypeForImage {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    type: string;
}

@ObjectType()
class MediaType {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    name: string;
}

@ObjectType()
class MediaDuplicacyRule {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    duplicacyRule: string;
}

@ObjectType()
class ImageType {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    objectType: ObjectTypeForImage;

    @Field({ nullable: true })
    mediaType: MediaType;

    @Field({ nullable: true })
    objectTypeId: number;

    @Field({ nullable: true })
    mediaTypeId: number;

    @Field({ nullable: true })
    type: string;

    @Field({ nullable: true })
    domainId: number;

    @Field({ nullable: true })
    priority: number;

    @Field({ nullable: true })
    imageSitemapEnabled: number;

    @Field({ nullable: true })
    displayName: string;

    @Field({ nullable: true })
    mediaDuplicacyRule: MediaDuplicacyRule;
}

/* 
    ! The keys in JSON have space which is not accepted by nest 
    ! To be changed (under construction, not launched)
*/
@ObjectType()
class ProjectStatusCount {
    @Field({ nullable: true })
    underConstruction: number;

    @Field({ nullable: true })
    launch: number;

    @Field({ nullable: true })
    completed: number;

    @Field({ nullable: true })
    notLaunched: number;
}

@ObjectType()
class ImageObject {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    imageTypeId: number;

    @Field({ nullable: true })
    objectId: number;

    @Field({ nullable: true })
    path: string;

    @Field({ nullable: true })
    pageUrl: string;

    @Field({ nullable: true })
    statusId: number;

    @Field({ nullable: true })
    createdAt: number;

    @Field({ nullable: true })
    sizeInBytes: number;

    @Field({ nullable: true })
    width: number;

    @Field({ nullable: true })
    height: number;

    @Field({ nullable: true })
    altText: string;

    @Field({ nullable: true })
    title: string;

    @Field({ nullable: true })
    originalName: string;

    @Field({ nullable: true })
    waterMarkName: string;

    @Field({ nullable: true })
    activeStatus: number;

    @Field({ nullable: true })
    seoName: string;

    @Field({ nullable: true })
    absolutePath: string;

    @Field({ nullable: true })
    active: boolean;

    @Field({ nullable: true })
    imageType: ImageType;

    @Field({ nullable: true })
    masterImageStatuses: MasterImageStatus;

    @Field({ nullable: true })
    jsonDump: string;

    @Field({ nullable: true })
    priority: number;
}

@ObjectType()
class AmenityTypeCount {
    @Field({ nullable: true })
    default: string;
}

@ObjectType()
class Locality {
    @Field({ nullable: true })
    localityId: number;

    @Field({ nullable: true })
    authorized: boolean;

    @Field({ nullable: true })
    cityId: number;

    @Field({ nullable: true })
    label: string;

    @Field({ nullable: true })
    localityServing: boolean;

    @Field({ nullable: true })
    url: string;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    priority: number;

    @Field({ nullable: true })
    overviewUrl: string;

    @Field({ nullable: true })
    relevanceScore: number;

    @Field({ nullable: true })
    projectMaxLivabilityScore: number;

    @Field({ nullable: true })
    projectMinLivabilityScore: number;

    @Field({ nullable: true })
    isDescriptionVerified: boolean;

    @Field({ nullable: true })
    localityHeroshotImageUrl: string;

    @Field({ nullable: true })
    minAffordablePrice: number;

    @Field({ nullable: true })
    maxAffordablePrice: number;

    @Field({ nullable: true })
    minLuxuryPrice: number;

    @Field({ nullable: true })
    maxBudgetPrice: number;

    @Field({ nullable: true })
    constructionStatusId: number;

    @Field({ nullable: true })
    suburb: Suburb;

    @Field({ nullable: true })
    suburbId: number;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    latitude: number;

    @Field({ nullable: true })
    longitude: number;

    @Field({ nullable: true })
    projectStatusCount: ProjectStatusCount;

    //TBD
    @Field(() => AmenityTypeCount, { nullable: true })
    amenityTypeCount: AmenityTypeCount;

    @Field(() => [ImageObject], { nullable: true })
    images: ImageObject[];

    @Field({ nullable: true })
    imageCount: number;

    @Field({ nullable: true })
    totalReviews: number;

    @Field({ nullable: true })
    projectCount: number;

    @Field({ nullable: true })
    maxRadius: number;

    @Field({ nullable: true })
    avgPriceRisePercentage: number;

    @Field({ nullable: true })
    avgPriceRisePercentageApartment: number;

    @Field({ nullable: true })
    avgPriceRiseMonths: number;

    @Field({ nullable: true })
    avgPricePerUnitArea: number;

    @Field({ nullable: true })
    avgPricePerUnitAreaApartment: number;

    @Field({ nullable: true })
    dominantUnitType: string;

    @Field({ nullable: true })
    localityTagLine: string;

    @Field({ nullable: true })
    newsTag: string;

    @Field({ nullable: true })
    priceRiseRank: number;

    @Field({ nullable: true })
    priceRiseRankPercentage: number;

    @Field({ nullable: true })
    demandPercentage: number;

    @Field({ nullable: true })
    demandRank: number;

    @Field({ nullable: true })
    demandRankPercentage: number;

    @Field({ nullable: true })
    constructionStatus: string;

    @Field({ nullable: true })
    localityTaxonomyUrls: LocalityTaxonomyUrlObject;
}

@ObjectType()
export class Properties {
    @Field({ nullable: true })
    propertyId: number;

    @Field({ nullable: true })
    projectId: number;

    @Field({ nullable: true })
    bedrooms: number;

    @Field({ nullable: true })
    bathrooms: number;

    @Field({ nullable: true })
    unitType: string;

    @Field({ nullable: true })
    unitName: string;

    @Field({ nullable: true })
    priceCurrency: string;

    @Field({ nullable: true })
    size: number;

    @Field({ nullable: true })
    measure: string;

    @Field({ nullable: true })
    URL: string;

    @Field({ nullable: true })
    isPropertySoldOut: boolean;

    @Field({ nullable: true })
    carpetArea: number;
}

@ObjectType()
class LocalityAmenityType {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    description: string;
}
@ObjectType()
class Neighborhood {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    cityId: number;

    @Field({ nullable: true })
    localityId: number;

    @Field({ nullable: true })
    placeTypeId: number;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    latitude: number;

    @Field({ nullable: true })
    longitude: number;

    @Field({ nullable: true })
    geoDistance: number;

    @Field({ nullable: true })
    vicinity: string;

    @Field({ nullable: true })
    priority: number;

    @Field({ nullable: true })
    localityAmenityTypes: LocalityAmenityType;

    @Field({ nullable: true })
    rating: number;

    @Field({ nullable: true })
    futureInfrastructure: number;
}

@ObjectType()
class AmenityMaster {
    @Field({ nullable: true })
    amenityId: number;

    @Field({ nullable: true })
    amenityName: string;

    @Field({ nullable: true })
    abbreviation: string;
}
@ObjectType()
class ProjectAmenities {
    @Field({ nullable: true })
    id: number;

    @Field({ nullable: true })
    amenityDisplayName: string;

    @Field({ nullable: true })
    amenityMaster: AmenityMaster;

    @Field({ nullable: true })
    verified: boolean;
}

@ObjectType()
class VideoUrlObject {
    @Field({ nullable: true })
    videoId: number;

    @Field({ nullable: true })
    category: string;

    @Field({ nullable: true })
    videoUrl: string;

    @Field({ nullable: true })
    updatedAt: number;

    @Field({ nullable: true })
    performedAt: number;
}

@ObjectType()
class ImageCountByType {
    @Field({ nullable: true })
    main: number;
}

@ObjectType()
class LandmarkImageTypeCount {
    @Field({ nullable: true })
    default: string;
}

@ObjectType()
class Specifications {
    @Field({ nullable: true })
    default: string;
}

@ObjectType()
export class Project {
    @Field({ nullable: true })
    isHotProject: boolean;

    @Field({ nullable: true })
    isOldAgeCompatible: boolean;

    @Field({ nullable: true })
    isProjectServing: boolean;

    @Field({ nullable: true })
    projectFocus: boolean;

    @Field({ nullable: true })
    reraIdExpired: boolean;

    @Field({ nullable: true })
    projectUnderInvestigation: boolean;

    @Field({ nullable: true })
    hideBuilderName: boolean;

    @Field({ nullable: true })
    reraRegistrationNumber: string;

    @Field({ nullable: true })
    isFeaturedOnHomePage: boolean;

    @Field({ nullable: true })
    isFeaturedOnCityPage: boolean;

    @Field({ nullable: true })
    isFeaturedOnLocalityPage: boolean;

    @Field({ nullable: true })
    projectMainImageId: number;

    @Field({ nullable: true })
    isFeaturedOnMakaanIq: boolean;

    @Field({ nullable: true })
    isFeatured: boolean;

    @Field({ nullable: true })
    isProjectFeaturedBuy: boolean;

    @Field({ nullable: true })
    isProjectFeaturedRent: boolean;

    @Field({ nullable: true })
    builderPackageMagicNumber: number;

    @Field({ nullable: true })
    authorized: boolean;

    @Field({ nullable: true })
    localityId: number;

    @Field({ nullable: true })
    shouldDisplayPrice: boolean;

    @Field({ nullable: true })
    locality: Locality;

    @Field({ nullable: true })
    builderId: number;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    projectTypeId: number;

    @Field({ nullable: true })
    launchDate: number;

    @Field({ nullable: true })
    address: string;

    @Field({ nullable: true })
    completeProjectAddress: string;

    @Field({ nullable: true })
    computedPriority: number;

    @Field({ nullable: true })
    assignedPriority: number;

    @Field({ nullable: true })
    assignedLocalityPriority: number;

    @Field({ nullable: true })
    assignedSuburbPriority: number;

    @Field({ nullable: true })
    possessionDate: number;

    @Field({ nullable: true })
    firstPhaseCompletionDate: number;

    @Field({ nullable: true })
    currentPhaseCompletionDate: number;

    @Field({ nullable: true })
    createdDate: number;

    @Field({ nullable: true })
    imageURL: string;

    @Field({ nullable: true })
    URL: string;

    @Field({ nullable: true })
    latitude: number;

    @Field({ nullable: true })
    longitude: number;

    @Field({ nullable: true })
    forceResale: number;

    @Field({ nullable: true })
    minBedrooms: number;

    @Field({ nullable: true })
    maxBedrooms: number;

    @Field({ nullable: true })
    projectStatus: string;

    @Field({ nullable: true })
    isResale: boolean;

    @Field({ nullable: true })
    isPrimary: boolean;

    @Field({ nullable: true })
    isSoldOut: boolean;

    @Field({ nullable: true })
    totalUnits: number;

    @Field({ nullable: true })
    sizeInAcres: number;

    @Field({ nullable: true })
    propertySizeMeasure: string;

    @Field({ nullable: true })
    dominantUnitType: string;

    @Field(() => [String], { nullable: true })
    propertyUnitTypes: [string];

    // TBD
    @Field(() => [String], { nullable: true })
    propertyUnitTypesCommerical: [string];

    @Field({ nullable: true })
    localityLabelPriority: string;

    @Field({ nullable: true })
    suburbLabelPriority: string;

    @Field({ nullable: true })
    builderLabelPriority: string;

    @Field({ nullable: true })
    unitTypeString: string;

    @Field(() => [String], { nullable: true })
    distinctBedrooms: string[];

    @Field(() => [String], { nullable: true })
    distinctBedroomsFloat: string[];

    @Field({ nullable: true })
    imagesCount: number;

    @Field({ nullable: true })
    hasProjectOffer: boolean;

    @Field({ nullable: true })
    livabilityScore: number;

    @Field({ nullable: true })
    primaryScore: number;

    @Field({ nullable: true })
    projectLivabilityRank: number;

    @Field({ nullable: true })
    activeStatus: string;

    @Field({ nullable: true })
    has3DImages: boolean;

    @Field({ nullable: true })
    resaleEnquiry: boolean;

    @Field({ nullable: true })
    hasProjectInsightReport: boolean;

    @Field({ nullable: true })
    projectId: number;

    // TBD
    @Field(() => [Properties], { nullable: true })
    properties: [Properties];

    @Field({ nullable: true })
    mainImage: MainImage;

    @Field({ nullable: true })
    builder: Builder;

    @Field({ nullable: true })
    minSize: number;

    @Field({ nullable: true })
    maxSize: number;

    @Field({ nullable: true })
    minCarpetArea: number;

    @Field({ nullable: true })
    maxCarpetArea: number;

    @Field({ nullable: true })
    description: string;

    @Field(() => [ImageObject], { nullable: true })
    images: ImageObject[];

    @Field(() => [Neighborhood], { nullable: true })
    neighborhood: [Neighborhood];

    @Field(() => [String], { nullable: true })
    resiProjectSpecifications: string[];

    @Field(() => [ProjectAmenities], { nullable: true })
    projectAmenities: [ProjectAmenities];

    @Field({ nullable: true })
    paymentPlanUrl: string;

    @Field(() => [VideoUrlObject], { nullable: true })
    videoUrls: [VideoUrlObject];

    @Field(() => [String], { nullable: true })
    loanProviderBanks: string[];

    @Field(() => [String], { nullable: true })
    loanProviderBankList: string[];

    @Field({ nullable: true })
    lastUpdatedDate: number;

    @Field({ nullable: true })
    webinarUrl: string;

    @Field({ nullable: true })
    imageCountByType: ImageCountByType;

    @Field({ nullable: true })
    videosCount: number;

    @Field({ nullable: true })
    newsTag: string;

    //TBD
    @Field(() => [String], { nullable: true })
    landmarkImages: string[];

    @Field({ nullable: true })
    imageTypeCount: ImageCountByType;

    // TBD
    @Field(() => LandmarkImageTypeCount, { nullable: true })
    landmarkImageTypeCount: LandmarkImageTypeCount;

    @Field({ nullable: true })
    hasTownship: boolean;

    //TBD
    @Field(() => [String], { nullable: true })
    approvers: string[];

    @Field({ nullable: true })
    isRedevelopementProject: boolean;

    // TBD
    @Field(() => Specifications, { nullable: true })
    specifications: Specifications;
}
