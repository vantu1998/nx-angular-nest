import { Module } from '@nestjs/common';
import {ApiFeatureConfigModule} from "@nx-with-chau-tran/api/feature-config";

@Module({
  imports: [ApiFeatureConfigModule],
})
export class AppModule {}
