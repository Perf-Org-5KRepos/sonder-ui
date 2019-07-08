/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  SelectOption,
} from './shared/interfaces';
import {
  Column,
} from './components/grid/grid-helpers';
import {
  RowSelectionPattern,
} from './components/grid/row';


export namespace Components {

  interface ComboAutocomplete {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface ComboAutocompleteAttributes extends StencilHTMLAttributes {
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

  interface ComboAutoselect {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface ComboAutoselectAttributes extends StencilHTMLAttributes {
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

  interface ComboFilter {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface ComboFilterAttributes extends StencilHTMLAttributes {
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

  interface ComboNative {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
    /**
    * boolean required
    */
    'required': boolean;
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
    /**
    * boolean required
    */
    'required'?: boolean;
  }

  interface ComboNofilter {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface ComboNofilterAttributes extends StencilHTMLAttributes {
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

  interface ComboNoinput {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface ComboNoinputAttributes extends StencilHTMLAttributes {
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

  interface SuiDisclosure {
    /**
    * Optional override to the button's accessible name (using aria-label)
    */
    'buttonLabel': string;
    /**
    * Optionally set the popup region's accessible name using aria-label (recommended)
    */
    'popupLabel': string;
  }
  interface SuiDisclosureAttributes extends StencilHTMLAttributes {
    /**
    * Optional override to the button's accessible name (using aria-label)
    */
    'buttonLabel'?: string;
    /**
    * Emit a custom close event when the popup closes
    */
    'onClose'?: (event: CustomEvent) => void;
    /**
    * Emit a custom open event when the popup opens
    */
    'onOpen'?: (event: CustomEvent) => void;
    /**
    * Optionally set the popup region's accessible name using aria-label (recommended)
    */
    'popupLabel'?: string;
  }
  interface SuiGrid {
    /**
    * Grid data
    */
    'cells': string[][];
    /**
    * Column definitions
    */
    'columns': Column[];
    /**
    * Caption/description for the grid
    */
    'description': string;
    /**
    * Properties for Usability test case behaviors: *
    */
    'editOnClick': boolean;
    /**
    * String ID of labelling element
    */
    'labelledBy': string;
    /**
    * Number of rows in one "page": used to compute pageUp/pageDown key behavior, and when paging is used
    */
    'pageLength': number;
    'rowSelection': RowSelectionPattern;
  }
  interface SuiGridAttributes extends StencilHTMLAttributes {
    /**
    * Grid data
    */
    'cells'?: string[][];
    /**
    * Column definitions
    */
    'columns'?: Column[];
    /**
    * Caption/description for the grid
    */
    'description'?: string;
    /**
    * Properties for Usability test case behaviors: *
    */
    'editOnClick'?: boolean;
    /**
    * String ID of labelling element
    */
    'labelledBy'?: string;
    /**
    * Emit a custom filter event
    */
    'onFilter'?: (event: CustomEvent) => void;
    /**
    * Emit a custom row selection event
    */
    'onRowSelect'?: (event: CustomEvent) => void;
    /**
    * Number of rows in one "page": used to compute pageUp/pageDown key behavior, and when paging is used
    */
    'pageLength'?: number;
    'rowSelection'?: RowSelectionPattern;
  }

  interface ListboxButton {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface ListboxButtonAttributes extends StencilHTMLAttributes {
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

  interface MultiselectButtons {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface MultiselectButtonsAttributes extends StencilHTMLAttributes {
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

  interface MultiselectCsv {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface MultiselectCsvAttributes extends StencilHTMLAttributes {
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

  interface MultiselectInline {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
  }
  interface MultiselectInlineAttributes extends StencilHTMLAttributes {
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

  interface MultiselectNative {
    /**
    * String label
    */
    'label': string;
    /**
    * Array of name/value options
    */
    'options': SelectOption[];
    /**
    * boolean required
    */
    'required': boolean;
  }
  interface MultiselectNativeAttributes extends StencilHTMLAttributes {
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
    /**
    * boolean required
    */
    'required'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ComboAutocomplete': Components.ComboAutocomplete;
    'ComboAutoselect': Components.ComboAutoselect;
    'ComboFilter': Components.ComboFilter;
    'ComboNative': Components.ComboNative;
    'ComboNofilter': Components.ComboNofilter;
    'ComboNoinput': Components.ComboNoinput;
    'ComboReadonly': Components.ComboReadonly;
    'SuiDisclosure': Components.SuiDisclosure;
    'SuiGrid': Components.SuiGrid;
    'ListboxButton': Components.ListboxButton;
    'MultiselectButtons': Components.MultiselectButtons;
    'MultiselectCsv': Components.MultiselectCsv;
    'MultiselectInline': Components.MultiselectInline;
    'MultiselectNative': Components.MultiselectNative;
  }

  interface StencilIntrinsicElements {
    'combo-autocomplete': Components.ComboAutocompleteAttributes;
    'combo-autoselect': Components.ComboAutoselectAttributes;
    'combo-filter': Components.ComboFilterAttributes;
    'combo-native': Components.ComboNativeAttributes;
    'combo-nofilter': Components.ComboNofilterAttributes;
    'combo-noinput': Components.ComboNoinputAttributes;
    'combo-readonly': Components.ComboReadonlyAttributes;
    'sui-disclosure': Components.SuiDisclosureAttributes;
    'sui-grid': Components.SuiGridAttributes;
    'listbox-button': Components.ListboxButtonAttributes;
    'multiselect-buttons': Components.MultiselectButtonsAttributes;
    'multiselect-csv': Components.MultiselectCsvAttributes;
    'multiselect-inline': Components.MultiselectInlineAttributes;
    'multiselect-native': Components.MultiselectNativeAttributes;
  }


  interface HTMLComboAutocompleteElement extends Components.ComboAutocomplete, HTMLStencilElement {}
  var HTMLComboAutocompleteElement: {
    prototype: HTMLComboAutocompleteElement;
    new (): HTMLComboAutocompleteElement;
  };

  interface HTMLComboAutoselectElement extends Components.ComboAutoselect, HTMLStencilElement {}
  var HTMLComboAutoselectElement: {
    prototype: HTMLComboAutoselectElement;
    new (): HTMLComboAutoselectElement;
  };

  interface HTMLComboFilterElement extends Components.ComboFilter, HTMLStencilElement {}
  var HTMLComboFilterElement: {
    prototype: HTMLComboFilterElement;
    new (): HTMLComboFilterElement;
  };

  interface HTMLComboNativeElement extends Components.ComboNative, HTMLStencilElement {}
  var HTMLComboNativeElement: {
    prototype: HTMLComboNativeElement;
    new (): HTMLComboNativeElement;
  };

  interface HTMLComboNofilterElement extends Components.ComboNofilter, HTMLStencilElement {}
  var HTMLComboNofilterElement: {
    prototype: HTMLComboNofilterElement;
    new (): HTMLComboNofilterElement;
  };

  interface HTMLComboNoinputElement extends Components.ComboNoinput, HTMLStencilElement {}
  var HTMLComboNoinputElement: {
    prototype: HTMLComboNoinputElement;
    new (): HTMLComboNoinputElement;
  };

  interface HTMLComboReadonlyElement extends Components.ComboReadonly, HTMLStencilElement {}
  var HTMLComboReadonlyElement: {
    prototype: HTMLComboReadonlyElement;
    new (): HTMLComboReadonlyElement;
  };

  interface HTMLSuiDisclosureElement extends Components.SuiDisclosure, HTMLStencilElement {}
  var HTMLSuiDisclosureElement: {
    prototype: HTMLSuiDisclosureElement;
    new (): HTMLSuiDisclosureElement;
  };

  interface HTMLSuiGridElement extends Components.SuiGrid, HTMLStencilElement {}
  var HTMLSuiGridElement: {
    prototype: HTMLSuiGridElement;
    new (): HTMLSuiGridElement;
  };

  interface HTMLListboxButtonElement extends Components.ListboxButton, HTMLStencilElement {}
  var HTMLListboxButtonElement: {
    prototype: HTMLListboxButtonElement;
    new (): HTMLListboxButtonElement;
  };

  interface HTMLMultiselectButtonsElement extends Components.MultiselectButtons, HTMLStencilElement {}
  var HTMLMultiselectButtonsElement: {
    prototype: HTMLMultiselectButtonsElement;
    new (): HTMLMultiselectButtonsElement;
  };

  interface HTMLMultiselectCsvElement extends Components.MultiselectCsv, HTMLStencilElement {}
  var HTMLMultiselectCsvElement: {
    prototype: HTMLMultiselectCsvElement;
    new (): HTMLMultiselectCsvElement;
  };

  interface HTMLMultiselectInlineElement extends Components.MultiselectInline, HTMLStencilElement {}
  var HTMLMultiselectInlineElement: {
    prototype: HTMLMultiselectInlineElement;
    new (): HTMLMultiselectInlineElement;
  };

  interface HTMLMultiselectNativeElement extends Components.MultiselectNative, HTMLStencilElement {}
  var HTMLMultiselectNativeElement: {
    prototype: HTMLMultiselectNativeElement;
    new (): HTMLMultiselectNativeElement;
  };

  interface HTMLElementTagNameMap {
    'combo-autocomplete': HTMLComboAutocompleteElement
    'combo-autoselect': HTMLComboAutoselectElement
    'combo-filter': HTMLComboFilterElement
    'combo-native': HTMLComboNativeElement
    'combo-nofilter': HTMLComboNofilterElement
    'combo-noinput': HTMLComboNoinputElement
    'combo-readonly': HTMLComboReadonlyElement
    'sui-disclosure': HTMLSuiDisclosureElement
    'sui-grid': HTMLSuiGridElement
    'listbox-button': HTMLListboxButtonElement
    'multiselect-buttons': HTMLMultiselectButtonsElement
    'multiselect-csv': HTMLMultiselectCsvElement
    'multiselect-inline': HTMLMultiselectInlineElement
    'multiselect-native': HTMLMultiselectNativeElement
  }

  interface ElementTagNameMap {
    'combo-autocomplete': HTMLComboAutocompleteElement;
    'combo-autoselect': HTMLComboAutoselectElement;
    'combo-filter': HTMLComboFilterElement;
    'combo-native': HTMLComboNativeElement;
    'combo-nofilter': HTMLComboNofilterElement;
    'combo-noinput': HTMLComboNoinputElement;
    'combo-readonly': HTMLComboReadonlyElement;
    'sui-disclosure': HTMLSuiDisclosureElement;
    'sui-grid': HTMLSuiGridElement;
    'listbox-button': HTMLListboxButtonElement;
    'multiselect-buttons': HTMLMultiselectButtonsElement;
    'multiselect-csv': HTMLMultiselectCsvElement;
    'multiselect-inline': HTMLMultiselectInlineElement;
    'multiselect-native': HTMLMultiselectNativeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
