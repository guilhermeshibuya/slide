import { SlideNav } from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.changeSlide(0);
slide.addArrow(".prev", ".next");
slide.addControl();
