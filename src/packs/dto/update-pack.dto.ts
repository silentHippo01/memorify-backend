import { CreatePackDto } from "./create-pack.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdatePackDto extends PartialType(CreatePackDto) { }