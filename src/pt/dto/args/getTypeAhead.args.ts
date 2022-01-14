import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetTypeAheadArgs {
    @Field()
    query: string;

    @Field(() => Int, { nullable: true })
    rows: number;

    @Field({ nullable: true })
    city: string;

    @Field({ nullable: true })
    enhance: string;

    @Field()
    category: string;

    @Field()
    view: string;

    @Field()
    sourceDomain: string;

    @Field({ nullable: true })
    format: string;

    @Field({ nullable: true })
    usercity: string;
}
