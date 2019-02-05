/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  SelectOption,
} from './shared/interfaces';


export namespace Components {

  interface ComboFocus {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
    'useListboxPattern': boolean;
  }
  interface ComboFocusAttributes extends StencilHTMLAttributes {
    /**
    * String label
    */
    'label'?: string;
    /**
    * Emit a custom select event on value change
    */
    'onSelect'?: (event: CustomEvent) => void;
    /**
    * Array of name/value options
    */
    'options'?: SelectOption[];
    'useListboxPattern'?: boolean;
  }

  interface ComboNative {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface ComboNativeAttributes extends StencilHTMLAttributes {
    /**
    * String label
    */
    'label'?: string;
    /**
    * Emit a custom select event on value change
    */
    'onSelect'?: (event: CustomEvent) => void;
    /**
    * Array of name/value options
    */
    'options'?: SelectOption[];
  }

  interface ComboReadonly {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface ComboReadonlyAttributes extends StencilHTMLAttributes {
    /**
    * String label
    */
    'label'?: string;
    /**
    * Emit a custom select event on value change
    */
    'onSelect'?: (event: CustomEvent) => void;
    /**
    * Array of name/value options
    */
    'options'?: SelectOption[];
  }

  interface ComboTree {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface ComboTreeAttributes extends StencilHTMLAttributes {
    /**
    * String label
    */
    'label'?: string;
    /**
    * Emit a custom select event on value change
    */
    'onSelect'?: (event: CustomEvent) => void;
    /**
    * Array of name/value options
    */
    'options'?: SelectOption[];
  }
}

declare global {
  interface StencilElementInterfaces {
    'ComboFocus': Components.ComboFocus;
    'ComboNative': Components.ComboNative;
    'ComboReadonly': Components.ComboReadonly;
    'ComboTree': Components.ComboTree;
  }

  interface StencilIntrinsicElements {
    'combo-focus': Components.ComboFocusAttributes;
    'combo-native': Components.ComboNativeAttributes;
    'combo-readonly': Components.ComboReadonlyAttributes;
    'combo-tree': Components.ComboTreeAttributes;
  }


  interface HTMLComboFocusElement extends Components.ComboFocus, HTMLStencilElement {}
  var HTMLComboFocusElement: {
    prototype: HTMLComboFocusElement;
    new (): HTMLComboFocusElement;
  };

  interface HTMLComboNativeElement extends Components.ComboNative, HTMLStencilElement {}
  var HTMLComboNativeElement: {
    prototype: HTMLComboNativeElement;
    new (): HTMLComboNativeElement;
  };

  interface HTMLComboReadonlyElement extends Components.ComboReadonly, HTMLStencilElement {}
  var HTMLComboReadonlyElement: {
    prototype: HTMLComboReadonlyElement;
    new (): HTMLComboReadonlyElement;
  };

  interface HTMLComboTreeElement extends Components.ComboTree, HTMLStencilElement {}
  var HTMLComboTreeElement: {
    prototype: HTMLComboTreeElement;
    new (): HTMLComboTreeElement;
  };

  interface HTMLElementTagNameMap {
    'combo-focus': HTMLComboFocusElement
    'combo-native': HTMLComboNativeElement
    'combo-readonly': HTMLComboReadonlyElement
    'combo-tree': HTMLComboTreeElement
  }

  interface ElementTagNameMap {
    'combo-focus': HTMLComboFocusElement;
    'combo-native': HTMLComboNativeElement;
    'combo-readonly': HTMLComboReadonlyElement;
    'combo-tree': HTMLComboTreeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
