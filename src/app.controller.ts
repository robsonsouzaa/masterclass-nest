import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './database/dtos/create-team-member-body';
import { RocketMemberRepository } from './repositories/rocket-member-repository';

@Controller()
export class AppController {
  constructor(private rocketMemberRepository: RocketMemberRepository) {}

  @Post()
  async createMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMemberRepository.create(name, memberFunction);
  }
}
