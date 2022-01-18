import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class country {
    @Field()
    countryId: number;

    @Field({ nullable: true })
    label: string;

    @Field({ nullable: true })
    displayName: string;

    @Field({ nullable: true })
    countryCode: string;

    @Field({ nullable: true })
    offsetSeconds: number;

    @Field({ nullable: true })
    currency: string;
}
