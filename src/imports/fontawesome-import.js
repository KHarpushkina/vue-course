"use strict";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronRight);
library.add(faEdit);
library.add(faTrashAlt);

export default function (app) {
	app.component("font-awesome-icon", FontAwesomeIcon);
}


