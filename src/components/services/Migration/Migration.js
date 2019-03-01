import React from 'react';
import { Table, Media, Row, Image } from 'react-bootstrap';
import './Migration.css';

const Migration = props => {
	return (
		<div className='Migration'>
			<h1>Is your Infrastructure ready for the Cloud?</h1>
			<Media>
				<img
					width={790}
					height={550}
					className='mr-3'
					src='../images/cloud_cotton1.jpg'
					alt='Ready for the Cloud'
				/>
				<Media.Body>
					<h5>Do you feel like your Infrastructure is ready for the Cloud?</h5>
					<p>
						Don't underestimate the Cost of a Migration to the Cloud. Ours AWS
						Specialists will cover you on this! From Provisioning and
						Configuration management to Security, Disaster Recovery and
						Reporting.
					</p>
					<p>Check out our services to find out more!</p>
				</Media.Body>
			</Media>

			<div>
				<h2>The migration spectrum</h2>
				<Media>
					<img
						width={790}
						height={550}
						className='mr-3'
						src='../images/cloud-saver.jpg'
						alt='Cloud Saver'
					/>
					<Media.Body>
						<h5>What's the easiest way to migrate to the Cloud?</h5>
						<Table striped bordered hover>
							<thead className='table-header'>
								<tr>
									<th>Lift and Shift</th>
									<th>The AWS Well-Architected Framework</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>The fastest, easiest way but it's not optimized</td>
									<td>Optimized and Designed to scale</td>
								</tr>
							</tbody>
						</Table>
					</Media.Body>
				</Media>

				<h2>The Process Overview</h2>
				<Media>
					<img
						width={790}
						height={550}
						className='mr-3'
						src='../images/cloud-saver.jpg'
						alt='Cloud Saver'
					/>
					<Media.Body>
						<h5>Steps to the Cloud Migration</h5>
						<ol>
							<li>Provisioning and Configuration Management</li>
							<li>Incident Resolution and Monitoring</li>
							<li>Change Control</li>
							<li>Patch Management</li>
							<li>Security and Management</li>
							<li>Backup and Restore</li>
							<li>Reporting</li>
						</ol>
					</Media.Body>
				</Media>

				<p />
				<h2>Foundation: Getting to production-ready</h2>
				<Table striped bordered hover>
					<thead className='table-header'>
						<tr>
							<th>Customer Pain Point</th>
							<th>Customer Gain</th>
							<th>Consequences if Avoided</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>120 days is too long and expensive</td>
							<td>
								The AMS (Amazon Managed Services) onboarding process ensures
								that all IT Domains are aligned and compliant and that the
								landing zone is designed to operate efficiently.
							</td>
							<td>The landing zone is not production ready</td>
						</tr>
						<tr>
							<td>
								No straight "Lift" and "Shift", Customer must adopt AWS Tools
							</td>
							<td>
								The AMS can leverage a standard tool set that enables
								automation.
							</td>
							<td>
								Inefficient operations managing multiple tool chains for
								undifferentiated heavy lifting.
							</td>
						</tr>
						<tr>
							<td>
								Change management interface vs. native CloudFormation AWS APIs.
							</td>
							<td>
								Automated, systematic handover from migration/dev to operations.
							</td>
							<td>
								Environment breakage and increase incident resolution times.
							</td>
						</tr>
						<tr>
							<td />
							<td>Preventive control over the environment.</td>
							<td>Customized controls for compliance management.</td>
						</tr>
					</tbody>
				</Table>
				<Table striped bordered hover>
					<thead className='table-header'>
						<tr>
							<th>Goal</th>
							<th>What it takes to achieve</th>
							<th>Explanation</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Federated Access - Join-Domain Access</td>
							<td>
								Users have to federate/authenticate in the console to interact
								with AWS and move through domain-joined bastions.
							</td>
							<td>
								Non Standard Controls - Hard to implement Governance and
								Compliance
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default Migration;
