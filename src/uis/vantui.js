import Vue from 'vue'
import { Rate } from 'vant';
import { Card } from 'vant';
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Search } from 'vant';
import { Grid, GridItem } from 'vant';
import { Button } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Image } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Tag } from 'vant';
import { Lazyload } from 'vant';
import { Popup } from 'vant';
import { Tab, Tabs } from 'vant';
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';

export default () =>{
    Vue.use(Rate);
    Vue.use(Icon);
    Vue.use(Card);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Button);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Image);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Tag);
    Vue.use(Lazyload);
    Vue.use(Popup);
    Vue.use(Tab).use(Tabs);
    Vue.use(Field);   
    Vue.use(Cell).use(CellGroup);
}