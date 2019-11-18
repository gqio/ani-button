// Import the LitElement base class and html helper function
import { LitElement, html, css, property } from "lit-element";

// Extend the LitElement base class
export default class MyElement extends LitElement {
  @property() name: string = "World";
  @property() sound: string = "woof";

  static get styles() {
    return css`
      .btn {
        font-size: 200%;
        border: 1px solid #0099ff;
        border-radius: 15px;
        background: #0099ff55;
      }
    `;
  }

  onClick() {
    this.dispatchEvent(
      new CustomEvent("bark", { detail: { sound: this.sound } })
    );
  }

  render() {
    return html`
      <button class="btn" @click="${this.onClick}">
        Hello ${this.name}!
      </button>
    `;
  }
}
