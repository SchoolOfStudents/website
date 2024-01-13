<script>
	import { Timeline } from '@svelteuidev/core';
</script>

<div class="timeline-box">
	<Timeline color="gray" active={-1} bulletSize={24} lineWidth={2}>
		<slot />
	</Timeline>
</div>

<style>
	.timeline-box {
		padding: 0 20px;
	}
</style>
