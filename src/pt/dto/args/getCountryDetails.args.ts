import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetCountryDetailsArgs {
    @Field()
    countryId: number;
}
