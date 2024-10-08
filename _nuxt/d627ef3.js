(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    260: function (t, r, n) {
      var content = n(345);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(22).default)("36b005b6", content, !0, { sourceMap: !1 });
    },
    272: function (t, r, n) {
      "use strict";
      var e = n(407),
        o = n(412),
        c = n(408),
        l = n(273),
        d = n(413),
        f = n(410),
        _ = n(203),
        v = n(201),
        h = n(133),
        m = n(202),
        x = n(96),
        w = n(409),
        k = n(411),
        y =
          (n(115),
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
        N = n(107),
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
    278: function (t, r, n) {
      n(279), (t.exports = n(280));
    },
    344: function (t, r, n) {
      "use strict";
      n(260);
    },
    345: function (t, r, n) {
      var e = n(21)(function (i) {
        return i[1];
      });
      e.push([t.i, "h1[data-v-35e10596]{font-size:20px}", ""]),
        (e.locals = {}),
        (t.exports = e);
    },
    84: function (t, r, n) {
      "use strict";
      var e = n(407),
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
        c = (n(344), n(107)),
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
  [[278, 3, 1, 4]],
]);
