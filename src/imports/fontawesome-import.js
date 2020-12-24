"use strict";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLongArrowAltRight)

export default function (app) {
	app.component("font-awesome-icon", FontAwesomeIcon);
}


