let selectedAttack = null;

function showContent(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showAttackContent(attack) {
    selectedAttack = attack;
    showContent(attack);
    resetRoleContents();
}

function showRoleContent(role) {
    if (selectedAttack) {
        const content = getRoleContent(role, selectedAttack);
        document.getElementById(`${role}-content`).innerHTML = content;
        showContent(role);
    } else {
        alert('Please select an attack type first.');
    }
}

function resetRoleContents() {
    document.getElementById('executive-content').innerHTML = 'Select an attack type first to view role-based content.';
    document.getElementById('manager-content').innerHTML = 'Select an attack type first to view role-based content.';
    document.getElementById('employee-content').innerHTML = 'Select an attack type first to view role-based content.';
}

function getRoleContent(role, attack) {
    const roleContents = {
        phishing: {
            executive: '<h2>Phishing Attack: Executive</h2><p>Evaluate the scope of the attack, activate the incident response team, and coordinate with legal and regulatory authorities.</p>',
            manager: '<h2>Phishing Attack: Manager</h2><p>Report to IT, contain the breach, assist affected team members, and communicate with your team.</p>',
            employee: '<h2>Phishing Attack: Employee</h2><p>Report the incident, disconnect from the network, change passwords, and run security scans.</p>'
        },
        ransomware: {
            executive: '<h2>Ransomware Attack: Executive</h2><p>Evaluate the extent of the attack, activate the incident response team, and coordinate with legal and regulatory authorities.</p>',
            manager: '<h2>Ransomware Attack: Manager</h2><p>Report to IT, contain the breach, assist affected team members, and communicate with your team.</p>',
            employee: '<h2>Ransomware Attack: Employee</h2><p>Report the incident, disconnect from the network, change passwords, and run security scans.</p>'
        },
        apts: {
            executive: '<h2>Advanced Persistent Threats (APTs): Executive</h2><p>Assess the impact, notify stakeholders, activate the incident response team, and ensure compliance with reporting requirements.</p>',
            manager: '<h2>Advanced Persistent Threats (APTs): Manager</h2><p>Report the incident to IT, support the investigation, and maintain communication with your team.</p>',
            employee: '<h2>Advanced Persistent Threats (APTs): Employee</h2><p>Report any suspicious activity, follow security protocols, and cooperate with IT during the investigation.</p>'
        },
        dos: {
            executive: '<h2>DoS/DDoS Attack: Executive</h2><p>Evaluate the business impact, engage the incident response team, and coordinate with service providers.</p>',
            manager: '<h2>DoS/DDoS Attack: Manager</h2><p>Report the attack to IT, assist in mitigating the impact, and keep your team informed.</p>',
            employee: '<h2>DoS/DDoS Attack: Employee</h2><p>Report any service disruptions, follow instructions from IT, and avoid making unnecessary changes to the system.</p>'
        },
        insider: {
            executive: '<h2>Insider Threat: Executive</h2><p>Conduct a thorough investigation, engage HR and legal teams, and ensure proper communication with stakeholders.</p>',
            manager: '<h2>Insider Threat: Manager</h2><p>Monitor for suspicious behavior, report incidents to IT, and support the investigation.</p>',
            employee: '<h2>Insider Threat: Employee</h2><p>Report any unusual activities, follow security policies, and cooperate with the investigation.</p>'
        },
        'sql-injection': {
            executive: '<h2>SQL Injection: Executive</h2><p>Evaluate the potential data breach, activate the incident response team, and coordinate with regulatory authorities.</p>',
            manager: '<h2>SQL Injection: Manager</h2><p>Report the incident to IT, support the investigation, and ensure team compliance with security measures.</p>',
            employee: '<h2>SQL Injection: Employee</h2><p>Report any anomalies, follow security protocols, and avoid using vulnerable input fields.</p>'
        },
        malware: {
            executive: '<h2>Malware Infections: Executive</h2><p>Assess the impact on business operations, engage the incident response team, and coordinate with cybersecurity experts.</p>',
            manager: '<h2>Malware Infections: Manager</h2><p>Report the infection to IT, assist in containment, and communicate with your team.</p>',
            employee: '<h2>Malware Infections: Employee</h2><p>Report any suspicious activity, disconnect from the network, and run security scans.</p>'
        },
        'social-engineering': {
            executive: '<h2>Social Engineering: Executive</h2><p>Evaluate the incident, engage the incident response team, and ensure proper communication with stakeholders.</p>',
            manager: '<h2>Social Engineering: Manager</h2><p>Report the incident to IT, support affected employees, and reinforce training.</p>',
            employee: '<h2>Social Engineering: Employee</h2><p>Report any suspicious requests, verify identities, and follow security protocols.</p>'
        },
        'zero-day': {
            executive: '<h2>Zero-Day Exploits: Executive</h2><p>Assess the potential impact, engage the incident response team, and ensure compliance with reporting requirements.</p>',
            manager: '<h2>Zero-Day Exploits: Manager</h2><p>Report the exploit to IT, support the investigation, and maintain communication with your team.</p>',
            employee: '<h2>Zero-Day Exploits: Employee</h2><p>Report any unusual activity, follow security protocols, and cooperate with IT during the investigation.</p>'
        },
        'data-breach': {
            executive: '<h2>Data Breaches: Executive</h2><p>Conduct a thorough investigation, notify stakeholders, engage the incident response team, and coordinate with regulatory authorities.</p>',
            manager: '<h2>Data Breaches: Manager</h2><p>Report the breach to IT, support the investigation, and ensure team compliance with security measures.</p>',
            employee: '<h2>Data Breaches: Employee</h2><p>Report any anomalies, follow security protocols, and avoid unauthorized data access.</p>'
        }
    };

    return roleContents[attack] ? roleContents[attack][role] : 'Content not available for the selected attack type and role.';
}
