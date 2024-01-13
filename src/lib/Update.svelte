<script>
	import Timeline from '$timeline/Timeline.svelte';

	import Update from '$timeline/Update.svelte';
	import NewFeature from '$timeline/NewFeature.svelte';
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
