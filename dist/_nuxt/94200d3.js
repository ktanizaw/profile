(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    254: function (t, r, n) {
      var content = n(339);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(22).default)("36b005b6", content, !0, { sourceMap: !1 });
    },
    266: function (t, r, n) {
      "use strict";
      var e = n(399),
        o = n(404),
        c = n(400),
        l = n(267),
        d = n(405),
        f = n(402),
        _ = n(197),
        v = n(195),
        h = n(127),
        m = n(196),
        x = n(90),
        w = n(401),
        k = n(403),
        y =
          (n(109),
          {
            name: "DefaultLayout",
            data: function () {
              return {
                drawer: !1,
                fixed: !1,
                items: [{ icon: "mdi-apps", title: "Top", to: "/" }],
                miniVariant: !1,
              };
            },
          }),
        N = n(101),
        component = Object(N.a)(
          y,
          function () {
            var t = this,
              r = t._self._c;
            return r(
              e.a,
              { attrs: { dark: "" } },
              [
                r(
                  k.a,
                  {
                    attrs: {
                      "mini-variant": t.miniVariant,
                      fixed: "",
                      app: "",
                    },
                    model: {
                      value: t.drawer,
                      callback: function (r) {
                        t.drawer = r;
                      },
                      expression: "drawer",
                    },
                  },
                  [
                    r(
                      v.a,
                      t._l(t.items, function (n, i) {
                        return r(
                          h.a,
                          {
                            key: i,
                            attrs: { to: n.to, router: "", exact: "" },
                          },
                          [
                            r(m.a, [r(_.a, [t._v(t._s(n.icon))])], 1),
                            t._v(" "),
                            r(x.a, [r(x.b, [t._v(t._s(n.title))])], 1),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                r(
                  o.a,
                  { attrs: { fixed: "", app: "" } },
                  [
                    r(c.a, {
                      on: {
                        click: function (r) {
                          r.stopPropagation(), (t.drawer = !t.drawer);
                        },
                      },
                    }),
                    t._v(" "),
                    r(
                      l.a,
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function (r) {
                            r.stopPropagation(),
                              (t.miniVariant = !t.miniVariant);
                          },
                        },
                      },
                      [
                        r(_.a, [
                          t._v(
                            "mdi-" +
                              t._s(
                                "chevron-".concat(
                                  t.miniVariant ? "right" : "left"
                                )
                              )
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                r(w.a, [r(d.a, [r("Nuxt")], 1)], 1),
                t._v(" "),
                r(f.a, { attrs: { absolute: !t.fixed, app: "" } }, [
                  r("span", [t._v("© " + t._s(new Date().getFullYear()))]),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      r.a = component.exports;
    },
    272: function (t, r, n) {
      n(273), (t.exports = n(274));
    },
    338: function (t, r, n) {
      "use strict";
      n(254);
    },
    339: function (t, r, n) {
      var e = n(21)(function (i) {
        return i[1];
      });
      e.push([t.i, "h1[data-v-35e10596]{font-size:20px}", ""]),
        (e.locals = {}),
        (t.exports = e);
    },
    78: function (t, r, n) {
      "use strict";
      var e = n(399),
        o = {
          name: "EmptyLayout",
          layout: "empty",
          props: { error: { type: Object, default: null } },
          data: function () {
            return {
              pageNotFound: "404 Not Found",
              otherError: "An error occurred",
            };
          },
          head: function () {
            return {
              title:
                404 === this.error.statusCode
                  ? this.pageNotFound
                  : this.otherError,
            };
          },
        },
        c = (n(338), n(101)),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              r = t._self._c;
            return r(
              e.a,
              { attrs: { dark: "" } },
              [
                404 === t.error.statusCode
                  ? r("h1", [t._v("\n    " + t._s(t.pageNotFound) + "\n  ")])
                  : r("h1", [t._v("\n    " + t._s(t.otherError) + "\n  ")]),
                t._v(" "),
                r("NuxtLink", { attrs: { to: "/" } }, [
                  t._v("\n    Home page\n  "),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "35e10596",
          null
        );
      r.a = component.exports;
    },
  },
  [[272, 3, 1, 4]],
]);
