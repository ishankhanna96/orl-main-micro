import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetProjectDetailsArgs {
    @Field()
    projectId: string;
}
