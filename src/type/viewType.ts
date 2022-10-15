export interface PermissionInter {
  menuTitle: string;
  children: Array<PermissionType> | any;
}

export type PermissionType = PermissionInter & {};
