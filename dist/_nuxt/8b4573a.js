(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    431: function (t, n, e) {
      var content = e(441);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(22).default)("6fa4112a", content, !0, { sourceMap: !1 });
    },
    440: function (t, n, e) {
      "use strict";
      e(431);
    },
    441: function (t, n, e) {
      var c = e(21)(function (i) {
        return i[1];
      });
      c.push([
        t.i,
        ".contents[data-v-74a3468a]{padding-top:30px}.button-text[data-v-74a3468a]{text-transform:none}",
        "",
      ]),
        (c.locals = {}),
        (t.exports = c);
    },
    446: function (t, n, e) {
      "use strict";
      e.r(n);
      var c = e(273),
        o = e(447),
        l = e(445),
        r = e(165),
        x = e(444),
        d = e(1),
        f = Object(d.b)({
          __name: "index",
          setup: function (t) {
            return {
              __sfc: !0,
              toExternalLink: function (link) {
                window.open(link, "_blank");
              },
            };
          },
        }),
        _ = (e(440), e(107)),
        component = Object(_.a)(
          f,
          function () {
            var t = this,
              n = t._self._c,
              e = t._self._setupProxy;
            return n(
              x.a,
              { attrs: { justify: "center", align: "center" } },
              [
                n(
                  l.a,
                  {
                    staticClass: "contents text-center",
                    attrs: { cols: "12", sm: "8", md: "6" },
                  },
                  [
                    n(r.a, {
                      staticClass: "rounded-circle mx-auto",
                      attrs: {
                        src: "/profile-icon.png",
                        alt: "profile-image",
                        height: "100",
                        width: "100",
                      },
                    }),
                    t._v(" "),
                    n("p", { staticClass: "display-1 font-weight-bold" }, [
                      t._v("Kenta Tanizawa"),
                    ]),
                    t._v(" "),
                    n(
                      o.a,
                      {
                        staticClass:
                          "pa-12 d-flex flex-column align-center mt-4",
                      },
                      [
                        n(
                          c.a,
                          {
                            staticClass: "text-capitalize",
                            attrs: { color: "#1E88E5", width: "120", nuxt: "" },
                            on: {
                              click: function (t) {
                                return e.toExternalLink(
                                  "https://github.com/ktanizaw"
                                );
                              },
                            },
                          },
                          [t._v("\n        GitHub\n      ")]
                        ),
                        t._v(" "),
                        n(
                          c.a,
                          {
                            staticClass: "text-capitalize mt-4",
                            attrs: { color: "#1E88E5", width: "120", nuxt: "" },
                            on: {
                              click: function (t) {
                                return e.toExternalLink(
                                  "https://www.linkedin.com/in/kenta-tanizawa-775b5226b/"
                                );
                              },
                            },
                          },
                          [t._v("\n        LinkedIn\n      ")]
                        ),
                        t._v(" "),
                        n(
                          c.a,
                          {
                            staticClass: "text-capitalize mt-4",
                            attrs: { color: "#1E88E5", width: "120", nuxt: "" },
                            on: {
                              click: function (t) {
                                return e.toExternalLink(
                                  "https://x.com/kents_7"
                                );
                              },
                            },
                          },
                          [t._v("\n        X\n      ")]
                        ),
                        t._v(" "),
                        n(
                          c.a,
                          {
                            staticClass: "text-capitalize mt-4",
                            attrs: { color: "#1E88E5", width: "120", nuxt: "" },
                            on: {
                              click: function (t) {
                                return e.toExternalLink(
                                  "https://qiita.com/kents1002"
                                );
                              },
                            },
                          },
                          [t._v("\n        Qiita\n      ")]
                        ),
                        t._v(" "),
                        n(
                          c.a,
                          {
                            staticClass: "text-capitalize mt-4",
                            attrs: { color: "#1E88E5", width: "120", nuxt: "" },
                            on: {
                              click: function (t) {
                                return e.toExternalLink(
                                  "https://medium.com/@kents1002"
                                );
                              },
                            },
                          },
                          [t._v("\n        Medium\n      ")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "74a3468a",
          null
        );
      n.default = component.exports;
    },
  },
]);
