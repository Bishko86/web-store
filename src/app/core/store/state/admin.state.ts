import { FirebaseError } from "firebase/app";

import { User } from "../../models";

export interface AdminState {
  users: User[];
  error: FirebaseError | null;
}

export const initialAdminState: AdminState = {
  users: [],
  error: null,
}
