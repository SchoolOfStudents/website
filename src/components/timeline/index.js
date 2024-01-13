
/* Example usage: 
 * <Timeline>
 *      <Timeline.Item type="update" date="2021-01-01">Item 1</Timeline.Item>
 *      <Timeline.Item type="feature" date="2021-01-02">Item 2</Timeline.Item>
 *      <Timeline.Item type="milestone" date="2021-01-03">Item 3</Timeline.Item>
 *      <Timeline.Item type="person" date="2021-01-04">Item 4</Timeline.Item>
 * </Timeline>
 */


import Timeline from './Timeline.svelte';
import Item from './Item.svelte';

Timeline.Item = Item;

export default Timeline;