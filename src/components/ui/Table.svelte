<script>
	let students = [
		{ name: 'John', age: 20, grade: 'A' },
		{ name: 'Jane', age: 19, grade: 'B' },
		{ name: 'Mike', age: 21, grade: 'A-' }
	];
</script>

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Age</th>
			<th>Grade</th>
		</tr>
	</thead>
	<tbody>
		{#each students as student}
			<tr>
				<td>{student.name}</td>
				<td>{student.age}</td>
				<td>{student.grade}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
		border-radius: 4px;
	}

	th,
	td {
		border: 1px solid #ccc;
		padding: 10px;
		text-align: center;
		color: white;
	}
</style>
