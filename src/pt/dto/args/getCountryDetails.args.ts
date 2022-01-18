import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class getCountryDetailsArgs {
    @Field()
    countryId: number;
}
