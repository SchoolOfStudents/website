<script>
	import Timeline from '$timeline/Timeline.svelte';

	import Update from '$timeline/Update.svelte';
	import NewFeature from '$timeline/NewFeature.svelte';

	/* How to add a new component:
	 * 1. Create a new file in src/timeline/ComponentName.svelte
	 * 2. USe the pattern from an existing component, change the icon
	 * 3. Add the component here and use it
	 */
</script>

<Timeline>
	<Update date="2021-09-01">
		This is an example of an update, updates are used when there are changes in the website. Such as
		bug fixes, or new looks.
	</Update>

	<NewFeature date="2021-09-01">
		This is an example of a new feature, new features are used when there are new features added to
		the website.
	</NewFeature>
</Timeline>
