import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import api from '../../services/api';
import styles from './styles.module.css';
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL

function VMInstance() {
  const { sessionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { guacamole_url, created_at } = location.state || {};

  const stopVM = async () => {
    try {
      await api.post(`${API_BASE_URL}/api/vm/stop-vm/${sessionId}/`);
      navigate('/projects');
    } catch (err) {
      alert('Failed to stop VM');
    }
  };

  if (!guacamole_url) {
    return <p>⚠️ No VM data provided. Please launch again.</p>;
  }

  return (
    <div className={styles.vmInstanceContainer}>
      <div className={styles.header}>
        <h1>🖥️ VM Session {sessionId}</h1>
        <p>Started at: {new Date(created_at).toLocaleString()}</p>
        <button onClick={stopVM} className={styles.actionBtn}>
          <FaPowerOff /> Stop VM
        </button>
      </div>

      <div className={styles.sessionFrame}>
        <iframe
          src={guacamole_url}
          width="100%"
          height="700px"
          frameBorder="0"
          title={`VM Session ${sessionId}`}
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default VMInstance;
