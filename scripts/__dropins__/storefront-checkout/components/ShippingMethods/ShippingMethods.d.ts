import { ShippingMethod } from '../../data/models';
import { UIComponentType } from '../../types/ComponentTypes';
import { FunctionComponent, VNode } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface ShippingMethodsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    error?: string | null;
    isLoading?: boolean;
    onDismissError?: () => void;
    onSelectionChange?: (method: ShippingMethod) => void;
    options: ShippingMethod[];
    selection: ShippingMethod | null;
    title?: VNode;
    UIComponentType?: UIComponentType;
}
export declare const ShippingMethods: FunctionComponent<ShippingMethodsProps & import('../ConditionalWrapper/ConditionalWrapper').ConditionalProps>;
//# sourceMappingURL=ShippingMethods.d.ts.map