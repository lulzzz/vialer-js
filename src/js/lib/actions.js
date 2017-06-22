'use strict'
/**
 * Generic Actions class to distinguish between tabs, background
 * and contentscript.
 */
class Actions {

    constructor(app, module) {
        this.app = app
        this.module = module

        if (this.app.env.extension) {
            if (this.app.env.extension.tab) {
                this._tab(app)
            } else if (this.app.env.extension.popup) {
                this._popup(app)
            } else if (this.app.env.extension.background) {
                this._background(app)
            }
        } else {
            // All actions are needed in an app-like setting.
        }
    }


    _background() {}


    _popup() {}


    _tab() {}
}

module.exports = Actions