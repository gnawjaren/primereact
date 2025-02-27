import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

export const ScrollPanelBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ScrollPanel',
        id: null,
        style: null,
        className: null,
        children: undefined
    },
    css: {
        classes: {
            root: ({ props }) => classNames('p-scrollpanel p-component', props.className),
            wrapper: 'p-scrollpanel-wrapper',
            content: 'p-scrollpanel-content',
            barx: 'p-scrollpanel-bar p-scrollpanel-bar-x',
            bary: 'p-scrollpanel-bar p-scrollpanel-bar-y'
        },
        styles: `
        @layer primereact {
            .p-scrollpanel-wrapper {
                overflow: hidden;
                width: 100%;
                height: 100%;
                position: relative;
                z-index: 1;
                float: left;
            }
            
            .p-scrollpanel-content {
                height: calc(100% + 18px);
                width: calc(100% + 18px);
                padding: 0 18px 18px 0;
                position: relative;
                overflow: hidden;
                box-sizing: border-box;
            }
            
            .p-scrollpanel-bar {
                position: relative;
                background: #c1c1c1;
                border-radius: 3px;
                z-index: 2;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.25s linear;
            }
            
            .p-scrollpanel-bar-y {
                width: 9px;
                top: 0;
            }
            
            .p-scrollpanel-bar-x {
                height: 9px;
                bottom: 0;
            }
            
            .p-scrollpanel-hidden {
                visibility: hidden;
            }
            
            .p-scrollpanel:hover .p-scrollpanel-bar,
            .p-scrollpanel:active .p-scrollpanel-bar {
                opacity: 1;
            }
            
            .p-scrollpanel-grabbed {
                user-select: none;
            }
        }
        `
    }
});
