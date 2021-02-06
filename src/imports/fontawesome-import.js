"use strict";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronRight,
    faEdit,
    faTrashAlt,
    faPlus,
    faExclamationCircle,
    faCheckCircle,
    faTimesCircle,
    faUser,
    faExclamationTriangle,
    faMap,
    faMapSigns
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronRight);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faPlus);
library.add(faTimesCircle);
library.add(faExclamationCircle);
library.add(faCheckCircle);
library.add(faUser);
library.add(faExclamationTriangle);
library.add(faMapSigns);
library.add(faMap);

export default function(app) {
    app.component("font-awesome-icon", FontAwesomeIcon);
}
