import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TypeAhead {
    @Field({ nullable: true })
    id: string;

    @Field({ nullable: true })
    score: number;

    @Field({ nullable: true })
    redirectUrl: string;

    @Field({ nullable: true })
    type: string;

    @Field({ nullable: true })
    displayText: string;

    @Field({ nullable: true })
    entityId: number;

    @Field({ nullable: true })
    entityName: string;

    @Field({ nullable: true })
    builderId: number;

    @Field({ nullable: true })
    builderName: string;
}
