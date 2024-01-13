<script>
	import Timeline from '$timeline/Timeline.svelte';

	import Person from '$timeline/Person.svelte';
	import Milestone from '$timeline/Milestone.svelte';
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
