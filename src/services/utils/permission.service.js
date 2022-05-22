import localStorageService from "@/services/utils/localStorageService";

export const permission = {
    ADMIN: {
        id: 1,
        routeNames : []
    }, MODERATOR: {
        id: 2,
        routeNames : ["Post", "Post-1", "Post-1.1", "Post-2", "Like", "Like-1"]
    }, GENERAL: {
        id:3,
        routeNames : ["Post", "Post-2"]
    }
}
const roles = localStorageService.getUserInfo()? localStorageService.getUserInfo().author.roles : null;


export const isPermittedToAccess = (routeName) => {
    if(roles !== null) {
        if(roles.indexOf(permission.ADMIN.id) > -1){
            return true;
        }
        if(roles.indexOf(permission.MODERATOR.id) > -1){
            if(permission.MODERATOR.routeNames.includes(routeName)){
                return true;
            }
            return false;
        }
        if(roles.indexOf(permission.GENERAL.id) > -1){
            if(permission.MODERATOR.routeNames.includes(routeName)){
                return false;
            }
            return true;
        }
    }
    return false
}