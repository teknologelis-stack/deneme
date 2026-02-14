/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

ChromeUtils.import("resource://gre/modules/XPCOMUtils.jsm");
ChromeUtils.defineModuleGetter(this, "Services", "resource://gre/modules/Services.jsm");

this.EXPORTED_SYMBOLS = ["AppConstants"];

// Immutable for export.
this.AppConstants = Object.freeze({
  // See this wiki page for more details about channel specific build
  // defines: https://wiki.mozilla.org/Platform/Channel-specific_build_defines
  NIGHTLY_BUILD:
//@line 22 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 24 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  RELEASE_OR_BETA:
//@line 27 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 31 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  EARLY_BETA_OR_EARLIER:
//@line 36 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 38 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  ACCESSIBILITY:
//@line 41 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 45 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  // Official corresponds, roughly, to whether this build is performed
  // on Mozilla's continuous integration infrastructure. You should
  // disable developer-only functionality when this flag is set.
  MOZILLA_OFFICIAL:
//@line 53 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 55 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_OFFICIAL_BRANDING:
//@line 60 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 62 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_DEV_EDITION:
//@line 67 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 69 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_SERVICES_HEALTHREPORT:
//@line 72 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 76 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_DATA_REPORTING:
//@line 79 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 83 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_SANDBOX:
//@line 86 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 90 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_CONTENT_SANDBOX:
//@line 93 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 97 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_TELEMETRY_REPORTING:
//@line 102 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 104 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_TELEMETRY_ON_BY_DEFAULT:
//@line 109 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 111 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_UPDATER:
//@line 114 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 118 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_SWITCHBOARD:
//@line 123 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 125 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_WEBRTC:
//@line 128 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 132 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_WIDGET_GTK:
//@line 137 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 139 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  XP_UNIX:
//@line 144 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 146 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

//@line 149 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  platform:
//@line 153 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  "win",
//@line 163 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  isPlatformAndVersionAtLeast(platform, version) {
    let platformVersion = Services.sysinfo.getProperty("version");
    return platform == this.platform &&
           Services.vc.compare(platformVersion, version) >= 0;
  },

  isPlatformAndVersionAtMost(platform, version) {
    let platformVersion = Services.sysinfo.getProperty("version");
    return platform == this.platform &&
           Services.vc.compare(platformVersion, version) <= 0;
  },

  MOZ_CRASHREPORTER:
//@line 178 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 182 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_MAINTENANCE_SERVICE:
//@line 185 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 189 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  DEBUG:
//@line 194 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 196 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  ASAN:
//@line 201 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 203 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_GRAPHENE:
//@line 208 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 210 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_SYSTEM_NSS:
//@line 215 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 217 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_PLACES:
//@line 220 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 224 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_ADDON_SIGNING:
//@line 227 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 231 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_REQUIRE_SIGNING:
//@line 236 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 238 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_ALLOW_LEGACY_EXTENSIONS:
//@line 243 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 245 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MENUBAR_CAN_AUTOHIDE:
//@line 248 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 252 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  CAN_DRAW_IN_TITLEBAR:
//@line 255 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 259 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_ANDROID_HISTORY:
//@line 264 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 266 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_TOOLKIT_SEARCH:
//@line 269 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 273 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_GECKO_PROFILER:
//@line 276 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  true,
//@line 280 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_ANDROID_ACTIVITY_STREAM:
//@line 285 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 287 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_ANDROID_MOZILLA_ONLINE:
//@line 292 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  false,
//@line 294 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  DLL_PREFIX: "",
  DLL_SUFFIX: ".dll",

  MOZ_APP_NAME: "firefox",
  MOZ_APP_VERSION: "60.0",
  MOZ_APP_VERSION_DISPLAY: "60.0",
  MOZ_BUILD_APP: "browser",
  MOZ_MACBUNDLE_NAME: "Nightly.app",
  MOZ_UPDATE_CHANNEL: "default",
  INSTALL_LOCALE: "en-US",
  MOZ_WIDGET_TOOLKIT: "windows",
  ANDROID_PACKAGE_NAME: "org.mozilla.firefox",

  DEBUG_JS_MODULES: "",

  MOZ_BING_API_CLIENTID: "no-bing-api-clientid",
  MOZ_BING_API_KEY: "no-bing-api-key",
  MOZ_GOOGLE_API_KEY: "no-google-api-key",
  MOZ_MOZILLA_API_KEY: "no-mozilla-api-key",

  // URL to the hg revision this was built from (e.g.
  // "https://hg.mozilla.org/mozilla-central/rev/6256ec9113c1")
  // On unofficial builds, this is an empty string.
//@line 321 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
  SOURCE_REVISION_URL: "",

  HAVE_USR_LIB64_DIR:
//@line 327 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
    false,
//@line 329 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  HAVE_SHELL_SERVICE:
//@line 332 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
    true,
//@line 336 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

  MOZ_STYLO:
//@line 339 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"
    true,
//@line 343 "s:\mozilla-release\toolkit\modules\AppConstants.jsm"

});
