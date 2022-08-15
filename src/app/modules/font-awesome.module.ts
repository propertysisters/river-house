import { NgModule } from '@angular/core';
import { FaConfig, FaIconLibrary, FontAwesomeModule as FontAwesome } from '@fortawesome/angular-fontawesome';
import {
    faAddressCard, faAlignJustify, faAlignLeft, faAlignRight, faAngleLeft, faArrowCircleDown, faArrowCircleRight, faBan, faBars, faBatteryEmpty, faBatteryFull, faBatteryHalf, faBatteryQuarter, faBatteryThreeQuarters, faBolt, faChartBar, faChartLine, faCheckCircle, faChevronRight, faCircleNotch, faClipboardCheck, faCloudUploadAlt, faCog, faCogs, faDownload, faEdit, faEllipsisV, faExclamationCircle,
    faExclamationTriangle, faEye,
    faEyeSlash, faFileDownload, faFileImage, faFileImport, faGlasses, faHeading, faHome, faImage, faImages, faInfo,
    faInfoCircle, faMeteor, faNewspaper, faParagraph, faPhotoVideo, faPlayCircle, faPlus, faPowerOff, faProjectDiagram, faQuestionCircle, faRedo, faRulerHorizontal, faSave, faSignInAlt,
    faSignOutAlt, faSortAmountUpAlt, faSortDown, faSortUp, faTags, faTimes, faTrashAlt, faUpload, faUserCircle, faVideo, faWrench
} from '@fortawesome/free-solid-svg-icons';

@NgModule
({
	imports:
	[
		FontAwesome
	],
	exports:
	[
		FontAwesome
	]
})
export class FontAwesomeModule
{
	constructor (faConfig: FaConfig, faLibrary: FaIconLibrary)
	{
		faLibrary.addIcons
		(
			faBars,
			faSignInAlt,
			faSignOutAlt,
			faEye,
			faEyeSlash,
			faCircleNotch,
			faHome,
			faChevronRight,
			faChartLine,
			faNewspaper,
			faPhotoVideo,
			faCog,
			faPlus,
			faTimes,
			faTrashAlt,
			faHeading,
			faParagraph,
			faImage,
			faRulerHorizontal,
			faCloudUploadAlt,
			faImages,
			faVideo,
			faFileImage,
			faSave,
			faEdit,
			faEllipsisV,
			faClipboardCheck,
			faBan,
			faAddressCard,
			faUpload,
			faCheckCircle,
			faExclamationCircle,
			faExclamationTriangle,
			faInfo,
			faInfoCircle,
			faArrowCircleRight,
			faArrowCircleDown,
			faWrench,
			faTags,
			faAlignLeft,
			faAlignJustify,
			faAlignRight,
            faBatteryEmpty,
            faBatteryQuarter,
            faBatteryHalf,
            faBatteryThreeQuarters,
            faBatteryFull,
            faMeteor,
            faDownload,
            faPlayCircle,
            faPowerOff,
            faRedo,
            faFileImport,
            faBars,
            faAngleLeft,
            faGlasses,
            faChartBar,
            faProjectDiagram,
            faCogs,
            faSortAmountUpAlt,
            faQuestionCircle,
            faUserCircle,
            faBolt,
            faFileDownload,
            faSortUp,
            faSortDown
		);
	}
}
