import { isEmpty } from "@ember/utils";
export default function logout(siteSettings, keyValueStore) {
  if (!siteSettings || !keyValueStore) {
    const container = Discourse.__container__;
    siteSettings = siteSettings || container.lookup("site-settings:main");
    keyValueStore = keyValueStore || container.lookup("key-value-store:main");
  }

  keyValueStore.abandonLocal();

  const redirect = siteSettings.logout_redirect;
  if (isEmpty(redirect)) {
    window.location = Discourse.getURL("/");
  } else {
    window.location.href = redirect;
  }
}
