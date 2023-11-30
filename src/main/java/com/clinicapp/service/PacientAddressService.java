package com.clinicapp.service;

import com.clinicapp.model.views.PacientAdresa;
import com.clinicapp.repository.PacientAdressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacientAddressService {

    @Autowired
    PacientAdressRepository pacientAdressRepository;

    @Autowired
    public PacientAddressService(PacientAdressRepository pacientAdressRepository) {
        this.pacientAdressRepository = pacientAdressRepository;
    }

    public List<PacientAdresa> getAll() {
        return pacientAdressRepository.getAllProc();
    }

    public PacientAdresa getById(int id) {
        return pacientAdressRepository.getByIdProc(id);
    }

    public void save(PacientAdresa pacientAdresa) {
        pacientAdressRepository.saveProc(pacientAdresa);
    }

    public void delete(int id) {
        pacientAdressRepository.deleteProc(id);
    }

    public void update(PacientAdresa pacientAdresa) {
        pacientAdressRepository.updateProc(pacientAdresa);
    }

}
