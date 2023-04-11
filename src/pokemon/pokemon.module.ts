import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PockemonSchema, Pokemon } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports:[ 
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PockemonSchema
      }
    ])
  ]
})
export class PokemonModule {}
