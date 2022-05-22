import {createStore} from "vuex";
import auth from "./auth.module";
import sidebarItem from "@/store/sidebarItem.module";

export default createStore({
    state     : {},
    mutations : {},
    actions   : {},
    modules   : {
        auth,
        sidebar: sidebarItem
    },
});
