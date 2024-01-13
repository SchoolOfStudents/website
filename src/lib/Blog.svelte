<script>
	import Timeline from '$timeline/Timeline.svelte';

	import Person from '$timeline/Person.svelte';
	import Milestone from '$timeline/Milestone.svelte';

	/* How to add a new component:
	 * 1. Create a new file in src/timeline/ComponentName.svelte
	 * 2. USe the pattern from an existing component, change the icon
	 * 3. Add the component here and use it
	 */
</script>

<Timeline>
	<Person date="2021-09-01">
		This is an example of a person, people are used when there are new people added to the team. Or
		a collaboration with another person.
	</Person>

	<Milestone date="2021-09-01">
		This is an example of a milestone, milestones are used when a goal is achieved.
	</Milestone>
</Timeline>
