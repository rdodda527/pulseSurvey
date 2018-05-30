import AppConfig from '../Config/AppConfig';

const { baseUrl } = AppConfig;
export default (authUser) => {
  const user = {
    UserId: authUser.UserId,
    OrgId: authUser.OrgId,
    Username: authUser.Email,
    Email: authUser.Email,
    Ecid: authUser.ECID,
    MrMs: 'Mr',
    FirstName: authUser.Firstname,
    LastName: authUser.Lastname,
    FullName: `${authUser.Firstname} ${authUser.Lastname}`,
    UserTypeId: 1,
    ImageUrl: `${baseUrl}/v1/app/navatar/${authUser.UserId}`,
    Team: [authUser.Team],
    Attributes: [],
  };

  return user;
};