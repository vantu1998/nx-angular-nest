import {UserRole} from "@nx-angular-nest/api/shared-data-access-entities";

export interface JwtPayload {
  email: string;
  username: string;
  role: UserRole;
}
