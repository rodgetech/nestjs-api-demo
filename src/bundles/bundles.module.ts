import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BundleEntity } from './bundle.entity';
import { BundlesService } from './bundles.service';
import { BundlesController } from './bundles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BundleEntity])],
  exports: [BundlesService],
  providers: [BundlesService],
  controllers: [BundlesController],
})
export class BundlesModule {}
