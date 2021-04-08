export interface Employee {
  employeeId: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  officeLocation: string;
  department: string;
  managerEmployeeId: string | null;
  reports: Employee[];
}
