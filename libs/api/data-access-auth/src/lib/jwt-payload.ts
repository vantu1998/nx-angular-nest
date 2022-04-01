import {UserRole} from "@nx-with-chau-tran/api/shared-data-access-entities";

export interface JwtPayload {
  email: string;
  username: string;
  role: UserRole;
}
