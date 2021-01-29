"use strict";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronRight);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faPlus);

export default function (app) {
	app.component("font-awesome-icon", FontAwesomeIcon);
}


