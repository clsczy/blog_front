import fetch from "@/utils/fetch";

/**
 *
 *
 * @export
 * @returns
 */
export function getHome(params) {
  return fetch({
    url: "/dipp/user/register",
    method: "get",
    params
  });
}
